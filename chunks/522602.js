n.d(t, {
    A: () => w,
}),
    n(896048),
    n(321073),
    n(228524);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(157559),
    c = n(743445),
    u = n(972711),
    d = n(31717),
    f = n(652215),
    p = n(985018);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = new Map(),
    m = [];

function g(e, t) {
    var n, r;
    return null != (n = null == (r = E(e)) ? void 0 : r.get(t)) ? n : m;
}

function E(e) {
    var t;
    return null != (t = h.get(e)) ? t : new Map();
}

function b(e, t, n) {
    let r = E(e);
    r.set(t, n), h.set(e, r);
}

function y(e) {
    let { channelId: t } = e,
        n = [...g(t, d.C.ChannelMessage)];
    n.shift(), b(t, d.C.ChannelMessage, n);
}
let O = (e) => {
    let { files: t, channelId: n, draftType: r, allowOptimization: i } = e,
        s = [...g(n, r)];
    s.length + t.length > f.XgB && r !== d.C.SlashCommand && r !== d.C.ApplicationLauncherCommand
        ? l.A.show({
              title: p.intl.string(p.t.wOr6hB),
              body: p.intl.formatToPlainString(p.t["qqyp/e"], {
                  limit: f.XgB,
              }),
          })
        : (a().forEach(t, (e) => {
              let t = new c.bK(e, n, s.length, i);
              t.upload(), s.push(t);
          }),
          b(n, r, s));
};

function A(e) {
    let { channelId: t, id: n, draftType: r } = e,
        i = [...g(t, r)],
        a = i.findIndex((e) =>
            (0, u.ph)(
                {
                    uri: n,
                    filename: n,
                },
                e,
            ),
        );
    a > -1 && (i.splice(a, 1)[0].removeFromMsgDraft(), b(t, r, i));
}

function v(e) {
    let { channelId: t, attachmentIds: n, draftType: r } = e,
        i = [...g(t, r)];
    n.forEach((e) => {
        let t = i.findIndex((t) => e === t.id);
        t > -1 && i.splice(t, 1)[0].removeFromMsgDraft();
    }),
        b(t, r, i);
}

function S(e) {
    let { channelId: t, id: n, filename: r, description: i, spoiler: a, thumbnail: s, draftType: o } = e,
        l = [...g(t, o)].map(
            (e) => (
                e.id === n &&
                    (void 0 !== r && (e.filename = r),
                    void 0 !== a && (e.spoiler = a),
                    void 0 !== i && (e.description = i),
                    void 0 !== s && (e.isThumbnail = s)),
                e
            ),
        );
    b(t, o, l);
}

function I(e) {
    let { channelId: t, id: n, file: r, draftType: i, allowOptimization: a } = e,
        s = [...g(t, i)].filter((e) => e.id !== n),
        o = new c.bK(r, t, void 0, a);
    o.upload(), s.push(o), b(t, i, s);
}

function T(e) {
    let { channelId: t, uploads: n, draftType: r } = e;
    b(t, r, n);
}

function C(e) {
    let { channelId: t, draftType: n } = e;
    b(t, n, []);
}

function N(e) {
    let { baseChannelId: t } = e;
    b(t, d.C.FirstThreadMessage, []);
}
class R extends (r = s.Ay.Store) {
    getFirstUpload(e, t) {
        let n = g(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        var n;
        return (null != (n = g(e, t).length) ? n : 0) > 1;
    }
    getUploads(e, t) {
        return g(e, t);
    }
    getUploadCount(e, t) {
        var n;
        return null != (n = g(e, t).length) ? n : 0;
    }
    getUpload(e, t, n) {
        return g(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return g(e, t).find(n);
    }
}
_(R, "displayName", "UploadAttachmentStore");
let w = new R(o.h, {
    UPLOAD_ATTACHMENT_POP_FILE: y,
    UPLOAD_ATTACHMENT_ADD_FILES: O,
    UPLOAD_ATTACHMENT_UPDATE_FILE: S,
    UPLOAD_ATTACHMENT_REMOVE_FILE: A,
    UPLOAD_ATTACHMENT_REMOVE_FILES: v,
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: C,
    UPLOAD_ATTACHMENT_SET_UPLOADS: T,
    UPLOAD_ATTACHMENT_SET_FILE: I,
    SIDEBAR_CLOSE: N,
});
