n.d(t, { Z: () => u });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(454585),
    o = n(273744),
    l = n(926686);
let u = (e) => {
    let {
            node: { info: t }
        } = e,
        n = r.useRef(
            s.Z.reactParserFor({
                ...s.Z.defaultRules,
                link: o.s
            })
        );
    return null == t
        ? null
        : (0, i.jsx)(a.Wn, {
              className: l.infoBox,
              messageType: a.QYI.INFO,
              children: n.current(t)
          });
};
