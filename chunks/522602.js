"use strict";
n.d(t, { A: () => A }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(157559),
    l = n(743445),
    u = n(972711),
    d = n(31717),
    c = n(652215),
    _ = n(985018);
let f = new Map(),
    E = [];
function h(e, t) {
    return p(e)?.get(t) ?? E;
}
function p(e) {
    return f.get(e) ?? new Map();
}
function m(e, t, n) {
    let r = p(e);
    r.set(t, n), f.set(e, r);
}
class g extends s.Ay.Store {
    static displayName = "UploadAttachmentStore";
    getFirstUpload(e, t) {
        let n = h(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        return (h(e, t).length ?? 0) > 1;
    }
    getUploads(e, t) {
        return h(e, t);
    }
    getUploadCount(e, t) {
        return h(e, t).length ?? 0;
    }
    getUpload(e, t, n) {
        return h(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return h(e, t).find(n);
    }
}
let A = new g(a.h, {
    UPLOAD_ATTACHMENT_POP_FILE: function (e) {
        let { channelId: t } = e,
            n = [...h(t, d.C.ChannelMessage)];
        n.shift(), m(t, d.C.ChannelMessage, n);
    },
    UPLOAD_ATTACHMENT_ADD_FILES: (e) => {
        let { files: t, channelId: n, draftType: r, allowOptimization: s } = e,
            a = [...h(n, r)];
        a.length + t.length > c.XgB && r !== d.C.SlashCommand && r !== d.C.ApplicationLauncherCommand
            ? o.A.show({
                  title: _.intl.string(_.t.wOr6hB),
                  body: _.intl.formatToPlainString(_.t["qqyp/e"], { limit: c.XgB }),
              })
            : (i().forEach(t, (e) => {
                  let t = new l.bK(e, n, a.length, s);
                  t.upload(), a.push(t);
              }),
              m(n, r, a));
    },
    UPLOAD_ATTACHMENT_UPDATE_FILE: function (e) {
        let { channelId: t, id: n, filename: r, description: i, spoiler: s, thumbnail: a, draftType: o } = e,
            l = [...h(t, o)].map(
                (e) => (
                    e.id === n &&
                        (void 0 !== r && (e.filename = r),
                        void 0 !== s && (e.spoiler = s),
                        void 0 !== i && (e.description = i),
                        void 0 !== a && (e.isThumbnail = a)),
                    e
                ),
            );
        m(t, o, l);
    },
    UPLOAD_ATTACHMENT_REMOVE_FILE: function (e) {
        let { channelId: t, id: n, draftType: r } = e,
            i = [...h(t, r)],
            s = i.findIndex((e) => (0, u.ph)({ uri: n, filename: n }, e));
        s > -1 && (i.splice(s, 1)[0].removeFromMsgDraft(), m(t, r, i));
    },
    UPLOAD_ATTACHMENT_REMOVE_FILES: function (e) {
        let { channelId: t, attachmentIds: n, draftType: r } = e,
            i = [...h(t, r)];
        n.forEach((e) => {
            let t = i.findIndex((t) => e === t.id);
            t > -1 && i.splice(t, 1)[0].removeFromMsgDraft();
        }),
            m(t, r, i);
    },
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function (e) {
        let { channelId: t, draftType: n } = e;
        m(t, n, []);
    },
    UPLOAD_ATTACHMENT_SET_UPLOADS: function (e) {
        let { channelId: t, uploads: n, draftType: r } = e;
        m(t, r, n);
    },
    UPLOAD_ATTACHMENT_SET_FILE: function (e) {
        let { channelId: t, id: n, file: r, draftType: i, allowOptimization: s } = e,
            a = [...h(t, i)].filter((e) => e.id !== n),
            o = new l.bK(r, t, void 0, s);
        o.upload(), a.push(o), m(t, i, a);
    },
});
