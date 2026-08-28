n.d(e, { _A: () => N, Ay: () => O, sP: () => $ }), n(938796);
var s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    l = n(877413),
    c = n.n(l),
    m = n(52133),
    d = n(939249),
    o = n(834730),
    u = n(613373),
    p = n(625494),
    E = n(609969),
    g = n(652215),
    A = n(580950);
function h(t) {
    let { timestampMs: e, attachmentId: n } = t;
    return (0, s.jsx)(d.D, {
        tag: "span",
        className: A.v,
        onClick: () => p._.dispatchKeyed(g.zOV.CLIP_SEEK_VIDEO, n, { timestampMs: (0, E.$)(e) }),
        children: (0, s.jsxs)(o.E, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-link",
            className: A.v,
            children: ["@", (0, u.rB)(e / 1e3)],
        }),
    });
}
var I = n(860227),
    T = n(861986),
    f = n(375708),
    _ = n(318626),
    S = n(165648),
    C = n(13673);
function N(t, e) {
    return t.type === g.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : t.hasFlag(g.pr7.SOURCE_MESSAGE_DELETED)
          ? f.intl.string(f.t.JOtgSw)
          : e;
}
function $(t, e) {
    let { message: n } = e,
        { message: s } = t;
    return (
        (0, m.A)(t, e, ["message"]) &&
        n.content === s.content &&
        n.state === s.state &&
        n.flags === s.flags &&
        n.editedTimestamp?.toString() === s.editedTimestamp?.toString()
    );
}
let O = i.memo(function (t) {
    let { className: e, message: n, children: a, content: l, onUpdate: m, contentRef: d, compact: o } = t,
        u = n.state === g.cmJ.SEND_FAILED,
        p = n.state === g.cmJ.SENDING,
        E = n.isCommandType(),
        A = n.editedTimestamp?.toString(),
        f = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            f.current ? null != m && m() : (f.current = !0);
        }, [m, n.content, l, A, a]),
        (0, s.jsxs)("div", {
            id: (0, I.CJ)(n),
            ref: d,
            className: r()(e, S.PT, {
                [_.BK]: !0,
                [C.t6]: n.hasFlag(g.pr7.IS_GUILD_OFFICIAL),
                [_.Tn]: p && !E,
                [_.nB]: "rtl" === c()(n.content),
                [_.Ix]: u,
                [_.w3]: n.isUnsupported,
            }),
            children: [
                n.type === g.lAJ.MEDIA_MENTION_MESSAGE &&
                    null != n.mediaMention &&
                    (0, s.jsx)(h, {
                        timestampMs: n.mediaMention.timestamp,
                        attachmentId: n.mediaMention.attachment_id,
                    }),
                a ?? N(n, l),
                (0, s.jsx)(T.A, { message: n, compact: o, location: T.O.WITH_CONTENT }),
            ],
        })
    );
}, $);
