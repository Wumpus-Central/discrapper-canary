n.d(t, { c: () => m }), n(35282), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(481060),
    o = n(198993),
    s = n(885006),
    l = n(981631),
    c = n(388032),
    d = n(233828);
let u = n(412998),
    f = n(515695),
    p = "".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]).concat(l.Z5c.ACTIVATE),
    h = "".concat(location.protocol, "//").concat(p);
function x(e) {
    let { text: t = "" } = e,
        [n, s] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = new Image();
            (e.src = f), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [f]),
        "" !== t && n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.ZP, {
                          size: 288,
                          text: t,
                      }),
                      (0, r.jsx)("div", {
                          className: d.qrcodeOverlay,
                          children: (0, r.jsx)("img", {
                              src: f,
                              alt: "",
                          }),
                      }),
                  ],
              })
            : (0, r.jsx)("div", {
                  className: d.qrcodeSpinner,
                  children: (0, r.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES }),
              })
    );
}
let m = (e) => {
    var t;
    let { code: n } = e,
        { width: a, height: o } = (0, s.Z)();
    return null == n || 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.panel,
              style: { zoom: Math.min(a / 1460, o / 1080, 1) },
              children: [
                  (0, r.jsx)("div", {
                      className: d.panelHeader,
                      children: (0, r.jsx)("div", { className: d.logo }),
                  }),
                  (0, r.jsxs)("div", {
                      className: d.panelContent,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.qrcodeContent,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: d.qrcodeCard,
                                      children: (0, r.jsx)(x, {
                                          text: "".concat(h, "?user_code=").concat(encodeURIComponent(n)),
                                      }),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: d.qrcodeText,
                                      children: [
                                          (0, r.jsx)(i.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "header-primary",
                                              className: d.qrcodeTextHeading,
                                              children: c.intl.string(c.t.llDCid),
                                          }),
                                          (0, r.jsx)(i.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "header-secondary",
                                              children: c.intl.string(c.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: d.dividerContent,
                              children: [
                                  (0, r.jsx)("div", { className: d.divider }),
                                  (0, r.jsx)(i.Heading, {
                                      variant: "heading-lg/semibold",
                                      color: "header-primary",
                                      className: d.dividerText,
                                      children: c.intl.string(c.t.arEHn4),
                                  }),
                                  (0, r.jsx)("div", { className: d.divider }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: d.fallbackContent,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: d.fallbackContentTextGroup,
                                      children: [
                                          (0, r.jsx)(i.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "header-primary",
                                              className: d.fallbackContentHeading,
                                              children: c.intl.string(c.t["Eu8rJ/"]),
                                          }),
                                          (0, r.jsx)(i.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "header-secondary",
                                              children: c.intl.string(c.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: d.fallbackContentAction,
                                      children: [
                                          (0, r.jsx)(i.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "header-primary",
                                              className: d.fallbackContentHeading,
                                              children: p,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: d.fallbackContentTextGroup,
                                              children: [
                                                  (0, r.jsx)(i.Heading, {
                                                      variant: "heading-xxl/normal",
                                                      color: "header-secondary",
                                                      children: c.intl.string(c.t.RyDxBX),
                                                  }),
                                                  (0, r.jsx)(i.Heading, {
                                                      variant: "heading-xxl/bold",
                                                      color: "header-primary",
                                                      className: d.fallbackContentCode,
                                                      children: null == (t = n.match(/.{1,4}/g)) ? void 0 : t.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("img", {
                              className: d.wumpus,
                              src: u,
                              alt: "",
                          }),
                      ],
                  }),
              ],
          });
};
