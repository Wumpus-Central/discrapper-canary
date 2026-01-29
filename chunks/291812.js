n.d(t, {
    Ay: () => y,
    _A: () => m,
    sP: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(877413),
    l = n.n(s),
    c = n(52133),
    u = n(860227),
    d = n(861986),
    f = n(652215),
    p = n(985018),
    _ = n(679740),
    h = n(206314);

function m(e, t) {
    return e.type === f.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(f.pr7.SOURCE_MESSAGE_DELETED)
          ? p.intl.string(p.t.JOtgSw)
          : t;
}

function g(e) {
    var t;
    let { className: n, message: a, children: s, content: c, onUpdate: p, contentRef: g, compact: E } = e,
        y = a.state === f.cmJ.SEND_FAILED,
        b = a.state === f.cmJ.SENDING,
        O = a.isCommandType(),
        v = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        A = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            A.current ? null != p && p() : (A.current = !0);
        }, [p, a.content, c, v, s]),
        (0, r.jsxs)("div", {
            id: (0, u.CJ)(a),
            ref: g,
            className: o()(n, h.PT, {
                [_.BK]: !0,
                [_.Tn]: b && !O,
                [_.nB]: "rtl" === l()(a.content),
                [_.Ix]: y,
                [_.w3]: a.isUnsupported,
            }),
            children: [
                null != s ? s : m(a, c),
                (0, r.jsx)(d.A, {
                    message: a,
                    compact: E,
                    location: d.O.WITH_CONTENT,
                }),
            ],
        })
    );
}

function E(e, t) {
    var n, r;
    let { message: i } = t,
        { message: a } = e;
    return (
        (0, c.A)(e, t, ["message"]) &&
        i.content === a.content &&
        i.state === a.state &&
        (null == (n = i.editedTimestamp) ? void 0 : n.toString()) ===
            (null == (r = a.editedTimestamp) ? void 0 : r.toString())
    );
}
let y = i.memo(g, E);
