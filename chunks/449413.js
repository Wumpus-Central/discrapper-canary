n.d(t, { Z: () => d });
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(410751);
let d = (e) => {
    let {
            node: { info: t }
        } = e,
        n = i.useRef(
            a.Z.reactParserFor({
                ...a.Z.defaultRules,
                link: s.s
            })
        );
    return null == t
        ? null
        : (0, l.jsx)(r.Wn, {
              className: o.infoBox,
              messageType: r.QYI.INFO,
              children: n.current(t)
          });
};
