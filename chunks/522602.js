"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(157559),
    l = n(280889),
    u = n(972711),
    c = n(31717),
    d = n(652215),
    _ = n(375708);
let h = new Map(),
    f = [];
function p(e, t) {
    return E(e)?.get(t) ?? f;
}
function E(e) {
    return h.get(e) ?? new Map();
}
function m(e, t, n) {
    let i = E(e);
    i.set(t, n), h.set(e, i);
}
class g extends s.Ay.Store {
    static displayName = "UploadAttachmentStore";
    getFirstUpload(e, t) {
        let n = p(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        return (p(e, t).length ?? 0) > 1;
    }
    getUploads(e, t) {
        return p(e, t);
    }
    getUploadCount(e, t) {
        return p(e, t).length ?? 0;
    }
    getUpload(e, t, n) {
        return p(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return p(e, t).find(n);
    }
}
let A = new g(a.h, {
    UPLOAD_ATTACHMENT_POP_FILE: function (e) {
        let { channelId: t } = e,
            n = [...p(t, c.C.ChannelMessage)];
        n.shift(), m(t, c.C.ChannelMessage, n);
    },
    UPLOAD_ATTACHMENT_ADD_FILES: (e) => {
        let { files: t, channelId: n, draftType: i, allowOptimization: s } = e,
            a = [...p(n, i)];
        a.length + t.length > d.XgB && i !== c.C.SlashCommand && i !== c.C.ApplicationLauncherCommand
            ? o.A.show({
                  title: _.intl.string(_.t.wOr6hB),
                  body: _.intl.formatToPlainString(_.t["qqyp/e"], { limit: d.XgB }),
              })
            : (r().forEach(t, (e) => {
                  let t = new l.bK(e, n, a.length, s);
                  t.upload(), a.push(t);
              }),
              m(n, i, a));
    },
    UPLOAD_ATTACHMENT_UPDATE_FILE: function (e) {
        let { channelId: t, id: n, filename: i, description: r, spoiler: s, thumbnail: a, draftType: o } = e,
            l = [...p(t, o)].map(
                (e) => (
                    e.id === n &&
                        (void 0 !== i && (e.filename = i),
                        void 0 !== s && (e.spoiler = s),
                        void 0 !== r && (e.description = r),
                        void 0 !== a && (e.isThumbnail = a)),
                    e
                ),
            );
        m(t, o, l);
    },
    UPLOAD_ATTACHMENT_REMOVE_FILE: function (e) {
        let { channelId: t, id: n, draftType: i } = e,
            r = [...p(t, i)],
            s = r.findIndex((e) => (0, u.ph)({ uri: n, filename: n }, e));
        s > -1 && (r.splice(s, 1)[0].removeFromMsgDraft(), m(t, i, r));
    },
    UPLOAD_ATTACHMENT_REMOVE_FILES: function (e) {
        let { channelId: t, attachmentIds: n, draftType: i } = e,
            r = [...p(t, i)];
        n.forEach((e) => {
            let t = r.findIndex((t) => e === t.id);
            t > -1 && r.splice(t, 1)[0].removeFromMsgDraft();
        }),
            m(t, i, r);
    },
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function (e) {
        let { channelId: t, draftType: n } = e;
        m(t, n, []);
    },
    UPLOAD_ATTACHMENT_SET_UPLOADS: function (e) {
        let { channelId: t, uploads: n, draftType: i } = e;
        m(t, i, n);
    },
    UPLOAD_ATTACHMENT_SET_FILE: function (e) {
        let { channelId: t, id: n, file: i, draftType: r, allowOptimization: s } = e,
            a = [...p(t, r)].filter((e) => e.id !== n),
            o = new l.bK(i, t, void 0, s);
        o.upload(), a.push(o), m(t, r, a);
    },
});
