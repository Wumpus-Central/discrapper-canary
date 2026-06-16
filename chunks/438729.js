n.d(t, { _A: () => C, Ay: () => O, sP: () => N }), n(938796);
var s = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(877413),
    c = n.n(l),
    m = n(52133),
    d = n(939249),
    o = n(834730),
    u = n(613373),
    p = n(625494),
    E = n(652215),
    g = n(429875);
function A(e) {
    let { timestampMs: t, attachmentId: n } = e;
    return (0, s.jsx)(d.D, {
        tag: "span",
        className: g.v,
        onClick: () => p._.dispatchKeyed(E.zOV.CLIP_SEEK_VIDEO, n, { timestampMs: t }),
        children: (0, s.jsxs)(o.E, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-link",
            className: g.v,
            children: ["@", (0, u.rB)(t / 1e3)],
        }),
    });
}
var h = n(860227),
    I = n(861986),
    T = n(375708),
    f = n(334211),
    _ = n(992595),
    S = n(701628);
function C(e, t) {
    return e.type === E.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(E.pr7.SOURCE_MESSAGE_DELETED)
          ? T.intl.string(T.t.JOtgSw)
          : t;
}
function N(e, t) {
    let { message: n } = t,
        { message: s } = e;
    return (
        (0, m.A)(e, t, ["message"]) &&
        n.content === s.content &&
        n.state === s.state &&
        n.flags === s.flags &&
        n.editedTimestamp?.toString() === s.editedTimestamp?.toString()
    );
}
let O = i.memo(function (e) {
    let { className: t, message: n, children: a, content: l, onUpdate: m, contentRef: d, compact: o } = e,
        u = n.state === E.cmJ.SEND_FAILED,
        p = n.state === E.cmJ.SENDING,
        g = n.isCommandType(),
        T = n.editedTimestamp?.toString(),
        N = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            N.current ? null != m && m() : (N.current = !0);
        }, [m, n.content, l, T, a]),
        (0, s.jsxs)("div", {
            id: (0, h.CJ)(n),
            ref: d,
            className: r()(t, _.PT, {
                [f.BK]: !0,
                [S.t6]: n.hasFlag(E.pr7.IS_GUILD_OFFICIAL),
                [f.Tn]: p && !g,
                [f.nB]: "rtl" === c()(n.content),
                [f.Ix]: u,
                [f.w3]: n.isUnsupported,
            }),
            children: [
                n.type === E.lAJ.MEDIA_MENTION_MESSAGE &&
                    null != n.mediaMention &&
                    (0, s.jsx)(A, {
                        timestampMs: n.mediaMention.timestamp,
                        attachmentId: n.mediaMention.attachment_id,
                    }),
                a ?? C(n, l),
                (0, s.jsx)(I.A, { message: n, compact: o, location: I.O.WITH_CONTENT }),
            ],
        })
    );
}, N);
