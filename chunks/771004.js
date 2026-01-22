n.d(t, {
    A: () => g,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(934551),
    o = n(158954),
    c = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    f = n(936636),
    x = n(985018),
    b = n(851822),
    p = n(812254);

function g(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, g] = r.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [j, h] = r.useState(!0),
        [v, y] = r.useState(!1),
        O = r.useRef(null),
        { width: A, height: I } = (0, u.A)();
    return (r.useEffect(() => {
        let e = O.current;
        null != e && y(e.scrollHeight - e.clientHeight > 1 || !j);
    }, [O, A, I, j]),
    null == t.summary)
        ? null
        : (0, l.jsxs)("div", {
              className: a()(b.fi, b.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, l.jsxs)("div", {
                          className: a()(b.nM, b.Lc),
                          children: [
                              (0, l.jsx)(s.PencilSparkleIcon, {
                                  color: c.A.colors.TEXT_DEFAULT,
                                  size: "xs",
                              }),
                              (0, l.jsx)(o.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: i
                                      ? x.intl.format(x.t.aZ2iIp, {
                                            onShowOriginal: () => g(!1),
                                        })
                                      : x.intl.format(x.t["/2ylF4"], {
                                            onShowTranslated: () => g(!0),
                                        }),
                              }),
                          ],
                      }),
                  (0, l.jsx)(o.EYj, {
                      ref: O,
                      lineClamp: j ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  v &&
                      (0, l.jsx)(d.DUT, {
                          className: b.vk,
                          onClick: () => {
                              n(j ? m.Ws.ShowMore : m.Ws.ShowLess), h(!j);
                          },
                          children: (0, l.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: j ? x.intl.string(x.t.lBeKY2) : x.intl.string(x.t["6MwJo/"]),
                          }),
                      }),
                  (0, l.jsx)(f.A, {
                      className: p.B,
                      detectedGame: t,
                  }),
              ],
          });
}
