n.d(t, { Z: () => D }), n(47120), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(668781),
    u = n(141795),
    c = n(596956),
    d = n(703558),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = new Map(),
    m = [];
function g(e, t) {
    var n, i;
    return null !== (i = null === (n = E(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : m;
}
function E(e) {
    var t;
    return null !== (t = h.get(e)) && void 0 !== t ? t : new Map();
}
function v(e, t, n) {
    let i = E(e);
    i.set(t, n), h.set(e, i);
}
function y(e) {
    let { channelId: t } = e,
        n = [...g(t, d.d.ChannelMessage)];
    n.shift(), v(t, d.d.ChannelMessage, n);
}
let I = (e) => {
    let { files: t, channelId: n, showLargeMessageDialog: i, draftType: r } = e,
        s = [...g(n, r)];
    if (s.length + t.length > f.dN1 && r !== d.d.SlashCommand && r !== d.d.ApplicationLauncherCommand) {
        l.Z.show({
            title: _.intl.string(_.t.wOr6hI),
            body: _.intl.formatToPlainString(_.t['qqyp/f'], { limit: f.dN1 })
        });
        return;
    }
    a().forEach(t, (e) => {
        let t = new u.n(e, n, i, s.length);
        t.upload(), s.push(t);
    }),
        v(n, r, s);
};
function T(e) {
    let { channelId: t, id: n, draftType: i } = e,
        r = [...g(t, i)],
        a = r.findIndex((e) =>
            (0, c.T)(
                {
                    uri: n,
                    filename: n
                },
                e
            )
        );
    a > -1 && (r.splice(a, 1)[0].cancel(), v(t, i, r));
}
function b(e) {
    let { channelId: t, attachmentIds: n, draftType: i } = e,
        r = [...g(t, i)];
    n.forEach((e) => {
        let t = r.findIndex((t) => e === t.id);
        t > -1 && r.splice(t, 1)[0].cancel();
    }),
        v(t, i, r);
}
function S(e) {
    let { channelId: t, id: n, filename: i, description: r, spoiler: a, thumbnail: s, draftType: o } = e,
        l = [...g(t, o)].map((e) => (e.id === n && (void 0 !== i && (e.filename = i), void 0 !== a && (e.spoiler = a), void 0 !== r && (e.description = r), void 0 !== s && (e.isThumbnail = s)), e));
    v(t, o, l);
}
function A(e) {
    let { channelId: t, id: n, file: i, draftType: r } = e,
        a = [...g(t, r)].filter((e) => e.id !== n),
        s = new u.n(i, t);
    s.upload(), a.push(s), v(t, r, a);
}
function N(e) {
    let { channelId: t, uploads: n, draftType: i } = e;
    v(t, i, n);
}
function C(e) {
    let { channelId: t, draftType: n } = e;
    v(t, n, []);
}
function R(e) {
    let { baseChannelId: t } = e;
    v(t, d.d.FirstThreadMessage, []);
}
class O extends (i = s.ZP.Store) {
    getFirstUpload(e, t) {
        let n = g(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        var n;
        return (null !== (n = g(e, t).length) && void 0 !== n ? n : 0) > 1;
    }
    getUploads(e, t) {
        return g(e, t);
    }
    getUploadCount(e, t) {
        var n;
        return null !== (n = g(e, t).length) && void 0 !== n ? n : 0;
    }
    getUpload(e, t, n) {
        return g(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return g(e, t).find(n);
    }
}
p(O, 'displayName', 'UploadAttachmentStore');
let D = new O(o.Z, {
    UPLOAD_ATTACHMENT_POP_FILE: y,
    UPLOAD_ATTACHMENT_ADD_FILES: I,
    UPLOAD_ATTACHMENT_UPDATE_FILE: S,
    UPLOAD_ATTACHMENT_REMOVE_FILE: T,
    UPLOAD_ATTACHMENT_REMOVE_FILES: b,
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: C,
    UPLOAD_ATTACHMENT_SET_UPLOADS: N,
    UPLOAD_ATTACHMENT_SET_FILE: A,
    SIDEBAR_CLOSE: R
});
