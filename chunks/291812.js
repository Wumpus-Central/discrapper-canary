"use strict";
n.d(t, { Ay: () => b, _A: () => g, sP: () => h });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(877413),
    c = n.n(l),
    o = n(52133),
    d = n(860227),
    u = n(861986),
    _ = n(652215),
    m = n(985018),
    p = n(334211),
    f = n(992595);
function g(e, t) {
    return e.type === _.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(_.pr7.SOURCE_MESSAGE_DELETED)
          ? m.intl.string(m.t.JOtgSw)
          : t;
}
function h(e, t) {
    let { message: n } = t,
        { message: i } = e;
    return (
        (0, o.A)(e, t, ["message"]) &&
        n.content === i.content &&
        n.state === i.state &&
        n.editedTimestamp?.toString() === i.editedTimestamp?.toString()
    );
}
let b = a.memo(function (e) {
    let { className: t, message: n, children: r, content: l, onUpdate: o, contentRef: m, compact: h } = e,
        b = n.state === _.cmJ.SEND_FAILED,
        C = n.state === _.cmJ.SENDING,
        I = n.isCommandType(),
        T = n.editedTimestamp?.toString(),
        x = a.useRef(!1);
    return (
        a.useLayoutEffect(() => {
            x.current ? null != o && o() : (x.current = !0);
        }, [o, n.content, l, T, r]),
        (0, i.jsxs)("div", {
            id: (0, d.CJ)(n),
            ref: m,
            className: s()(t, f.PT, {
                [p.BK]: !0,
                [p.Tn]: C && !I,
                [p.nB]: "rtl" === c()(n.content),
                [p.Ix]: b,
                [p.w3]: n.isUnsupported,
            }),
            children: [r ?? g(n, l), (0, i.jsx)(u.A, { message: n, compact: h, location: u.O.WITH_CONTENT })],
        })
    );
}, h);
