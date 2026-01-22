n.d(t, {
    Ay: () => y,
    _A: () => g,
    sP: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877413),
    l = n.n(o),
    c = n(52133),
    u = n(693198),
    d = n(860227),
    f = n(861986),
    p = n(652215),
    _ = n(985018),
    h = n(679740),
    m = n(206314);

function g(e, t) {
    return e.type === p.lAJ.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(p.pr7.SOURCE_MESSAGE_DELETED)
          ? _.intl.string(_.t.JOtgSw)
          : t;
}

function E(e) {
    var t;
    let { className: n, message: a, children: o, content: c, onUpdate: _, contentRef: E, compact: b } = e,
        y = a.state === p.cmJ.SEND_FAILED,
        O = a.state === p.cmJ.SENDING,
        A = a.isCommandType(),
        v = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        S = i.useRef(!1);
    i.useLayoutEffect(() => {
        S.current ? null != _ && _() : (S.current = !0);
    }, [_, a.content, c, v, o]);
    let I = u._.useConfig({
        location: "MessageContent",
    }).alignMessagesStart;
    return (0, r.jsxs)("div", {
        id: (0, d.CJ)(a),
        ref: E,
        className: s()(n, m.PT, {
            [h.BK]: !0,
            [h.Tn]: O && !A,
            [h.Dk]: I,
            [h.nB]: !I && "rtl" === l()(a.content),
            [h.Ix]: y,
            [h.w3]: a.isUnsupported,
        }),
        children: [
            null != o ? o : g(a, c),
            (0, r.jsx)(f.A, {
                message: a,
                compact: b,
                location: f.O.WITH_CONTENT,
            }),
        ],
    });
}

function b(e, t) {
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
let y = i.memo(E, b);
