n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(28664),
    o = n(481060),
    s = n(946273),
    l = n(441110),
    c = n(388032),
    u = n(610369);
function d(e) {
    let { guild: t, message: n } = e,
        d = i.useRef(null);
    return (0, s.vV)(t.id, n.author.id)
        ? (0, r.jsx)(o.yRy, {
              targetElementRef: d,
              animation: o.yRy.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(l.Z, {
                      guild: t,
                      message: n,
                      onClose: i,
                  });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(o.P3F, {
                      onClick: t,
                      tag: "span",
                      innerRef: d,
                      children: (0, r.jsx)(a.u, {
                          text: c.intl.string(c.t["v/OYd2"]),
                          children: (0, r.jsx)("div", {
                              className: u.newMemberBadge,
                              children: (0, r.jsx)(o.hg2, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                                  height: 20,
                              }),
                          }),
                      }),
                  });
              },
          })
        : null;
}
