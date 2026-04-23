"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(157559),
    l = n(743445),
    d = n(972711),
    _ = n(31717),
    u = n(652215),
    c = n(985018);
let E = new Map(),
    h = [];
function m(e, t) {
    return f(e)?.get(t) ?? h;
}
function f(e) {
    return E.get(e) ?? new Map();
}
function g(e, t, n) {
    let i = f(e);
    i.set(t, n), E.set(e, i);
}
class p extends s.Ay.Store {
    static displayName = "UploadAttachmentStore";
    getFirstUpload(e, t) {
        let n = m(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        return (m(e, t).length ?? 0) > 1;
    }
    getUploads(e, t) {
        return m(e, t);
    }
    getUploadCount(e, t) {
        return m(e, t).length ?? 0;
    }
    getUpload(e, t, n) {
        return m(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return m(e, t).find(n);
    }
}
let A = new p(a.h, {
    UPLOAD_ATTACHMENT_POP_FILE: function (e) {
        let { channelId: t } = e,
            n = [...m(t, _.C.ChannelMessage)];
        n.shift(), g(t, _.C.ChannelMessage, n);
    },
    UPLOAD_ATTACHMENT_ADD_FILES: (e) => {
        let { files: t, channelId: n, draftType: i, allowOptimization: s } = e,
            a = [...m(n, i)];
        a.length + t.length > u.XgB && i !== _.C.SlashCommand && i !== _.C.ApplicationLauncherCommand
            ? o.A.show({
                  title: c.intl.string(c.t.wOr6hB),
                  body: c.intl.formatToPlainString(c.t["qqyp/e"], { limit: u.XgB }),
              })
            : (r().forEach(t, (e) => {
                  let t = new l.bK(e, n, a.length, s);
                  t.upload(), a.push(t);
              }),
              g(n, i, a));
    },
    UPLOAD_ATTACHMENT_UPDATE_FILE: function (e) {
        let { channelId: t, id: n, filename: i, description: r, spoiler: s, thumbnail: a, draftType: o } = e,
            l = [...m(t, o)].map(
                (e) => (
                    e.id === n &&
                        (void 0 !== i && (e.filename = i),
                        void 0 !== s && (e.spoiler = s),
                        void 0 !== r && (e.description = r),
                        void 0 !== a && (e.isThumbnail = a)),
                    e
                ),
            );
        g(t, o, l);
    },
    UPLOAD_ATTACHMENT_REMOVE_FILE: function (e) {
        let { channelId: t, id: n, draftType: i } = e,
            r = [...m(t, i)],
            s = r.findIndex((e) => (0, d.ph)({ uri: n, filename: n }, e));
        s > -1 && (r.splice(s, 1)[0].removeFromMsgDraft(), g(t, i, r));
    },
    UPLOAD_ATTACHMENT_REMOVE_FILES: function (e) {
        let { channelId: t, attachmentIds: n, draftType: i } = e,
            r = [...m(t, i)];
        n.forEach((e) => {
            let t = r.findIndex((t) => e === t.id);
            t > -1 && r.splice(t, 1)[0].removeFromMsgDraft();
        }),
            g(t, i, r);
    },
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function (e) {
        let { channelId: t, draftType: n } = e;
        g(t, n, []);
    },
    UPLOAD_ATTACHMENT_SET_UPLOADS: function (e) {
        let { channelId: t, uploads: n, draftType: i } = e;
        g(t, i, n);
    },
    UPLOAD_ATTACHMENT_SET_FILE: function (e) {
        let { channelId: t, id: n, file: i, draftType: r, allowOptimization: s } = e,
            a = [...m(t, r)].filter((e) => e.id !== n),
            o = new l.bK(i, t, void 0, s);
        o.upload(), a.push(o), g(t, r, a);
    },
});
