(n.d(e, { _A: () => O, Ay: () => x, sP: () => f }), n(938796));
var s = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(877413),
    m = n.n(r),
    c = n(52133),
    d = n(939249),
    o = n(834730),
    E = n(613373),
    p = n(625494),
    u = n(609969),
    T = n(652215),
    I = n(580950);
function _(t) {
    let { timestampMs: e, attachmentId: n } = t;
    return (0, s.jsx)(d.D, {
        tag: "span",
        className: I.v,
        onClick: () => p._.dispatchKeyed(T.zOV.CLIP_SEEK_VIDEO, n, { timestampMs: (0, u.$)(e) }),
        children: (0, s.jsxs)(o.E, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-link",
            className: I.v,
            children: ["@", (0, E.rB)(e / 1e3)],
        }),
    });
}
var S = n(860227),
    h = n(861986),
    A = n(375708),
    C = n(318626),
    N = n(165648),
    g = n(13673);
function O(t, e) {
    return t.type === T.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : t.hasFlag(T.pr7.SOURCE_MESSAGE_DELETED)
          ? A.intl.string(A.t.JOtgSw)
          : e;
}
function f(t, e) {
    let { message: n } = e,
        { message: s } = t;
    return (
        (0, c.A)(t, e, ["message"]) &&
        n.content === s.content &&
        n.state === s.state &&
        n.flags === s.flags &&
        n.editedTimestamp?.toString() === s.editedTimestamp?.toString()
    );
}
let x = i.memo(function (t) {
    let { className: e, message: n, children: a, content: r, onUpdate: c, contentRef: d, compact: o } = t,
        E = n.state === T.cmJ.SEND_FAILED,
        p = n.state === T.cmJ.SENDING,
        u = n.isCommandType(),
        I = n.editedTimestamp?.toString(),
        A = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            A.current ? null != c && c() : (A.current = !0);
        }, [c, n.content, r, I, a]),
        (0, s.jsxs)("div", {
            id: (0, S.CJ)(n),
            ref: d,
            className: l()(e, N.PT, {
                [C.BK]: !0,
                [g.t6]: n.hasFlag(T.pr7.IS_GUILD_OFFICIAL),
                [C.Tn]: p && !u,
                [C.nB]: "rtl" === m()(n.content),
                [C.Ix]: E,
                [C.w3]: n.isUnsupported,
            }),
            children: [
                n.type === T.lAJ.MEDIA_MENTION_MESSAGE &&
                    null != n.mediaMention &&
                    (0, s.jsx)(_, {
                        timestampMs: n.mediaMention.timestamp,
                        attachmentId: n.mediaMention.attachment_id,
                    }),
                a ?? O(n, r),
                (0, s.jsx)(h.A, { message: n, compact: o, location: h.O.WITH_CONTENT }),
            ],
        })
    );
}, f);
