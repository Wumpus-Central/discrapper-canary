"use strict";
n.d(t, { Ay: () => f, _A: () => A, sP: () => _ });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(877413),
    o = n.n(r),
    c = n(52133),
    u = n(860227),
    d = n(861986),
    m = n(652215),
    g = n(985018),
    h = n(334211),
    p = n(992595);
function A(e, t) {
    return e.type === m.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(m.pr7.SOURCE_MESSAGE_DELETED)
          ? g.intl.string(g.t.JOtgSw)
          : t;
}
function _(e, t) {
    let { message: n } = t,
        { message: l } = e;
    return (
        (0, c.A)(e, t, ["message"]) &&
        n.content === l.content &&
        n.state === l.state &&
        n.editedTimestamp?.toString() === l.editedTimestamp?.toString()
    );
}
let f = a.memo(function (e) {
    let { className: t, message: n, children: s, content: r, onUpdate: c, contentRef: g, compact: _ } = e,
        f = n.state === m.cmJ.SEND_FAILED,
        v = n.state === m.cmJ.SENDING,
        x = n.isCommandType(),
        C = n.editedTimestamp?.toString(),
        I = a.useRef(!1);
    return (
        a.useLayoutEffect(() => {
            I.current ? null != c && c() : (I.current = !0);
        }, [c, n.content, r, C, s]),
        (0, l.jsxs)("div", {
            id: (0, u.CJ)(n),
            ref: g,
            className: i()(t, p.PT, {
                [h.BK]: !0,
                [h.Tn]: v && !x,
                [h.nB]: "rtl" === o()(n.content),
                [h.Ix]: f,
                [h.w3]: n.isUnsupported,
            }),
            children: [s ?? A(n, r), (0, l.jsx)(d.A, { message: n, compact: _, location: d.O.WITH_CONTENT })],
        })
    );
}, _);
