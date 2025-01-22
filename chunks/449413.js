var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(454585),
    l = r(273744),
    u = r(926686);
let c = (e) => {
    let {
            node: { info: n }
        } = e,
        r = a.useRef(
            s.Z.reactParserFor({
                ...s.Z.defaultRules,
                link: l.s
            })
        );
    return null == n
        ? null
        : (0, i.jsx)(o.HelpMessage, {
              className: u.infoBox,
              messageType: o.HelpMessageTypes.INFO,
              children: r.current(n)
          });
};
n.Z = c;
