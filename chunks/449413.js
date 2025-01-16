var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(454585),
    l = r(273744),
    u = r(926686);
let c = (e) => {
    let {
            node: { info: n }
        } = e,
        r = a.useRef(
            o.Z.reactParserFor({
                ...o.Z.defaultRules,
                link: l.s
            })
        );
    return null == n
        ? null
        : (0, i.jsx)(s.HelpMessage, {
              className: u.infoBox,
              messageType: s.HelpMessageTypes.INFO,
              children: r.current(n)
          });
};
n.Z = c;
