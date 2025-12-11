n.d(t, { c: () => g }), n(35282), n(388685);
var a = n(54381),
    r = n(473749),
    o = n(481060),
    i = n(198993),
    s = n(885006),
    c = n(981631),
    l = n(388032),
    d = n(269307);
let u = n(412998),
    f = n(515695),
    p = "".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]).concat(c.Z5c.ACTIVATE),
    h = "".concat(location.protocol, "//").concat(p);
function x(e) {
    let { text: t = "" } = e,
        [n, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            (e.src = f), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [f]),
        "" !== t && n
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(i.ZP, {
                          size: 288,
                          text: t,
                      }),
                      (0, a.jsx)("div", {
                          className: d.qrcodeOverlay,
                          children: (0, a.jsx)("img", {
                              src: f,
                              alt: "",
                          }),
                      }),
                  ],
              })
            : (0, a.jsx)("div", {
                  className: d.qrcodeSpinner,
                  children: (0, a.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES }),
              })
    );
}
let g = (e) => {
    var t;
    let { code: n } = e,
        { width: r, height: i } = (0, s.Z)();
    return null == n || 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              className: d.panel,
              style: { zoom: Math.min(r / 1460, i / 1080, 1) },
              children: [
                  (0, a.jsx)("div", {
                      className: d.panelHeader,
                      children: (0, a.jsx)("div", { className: d.logo }),
                  }),
                  (0, a.jsxs)("div", {
                      className: d.panelContent,
                      children: [
                          (0, a.jsxs)("div", {
                              className: d.qrcodeContent,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: d.qrcodeCard,
                                      children: (0, a.jsx)(x, {
                                          text: "".concat(h, "?user_code=").concat(encodeURIComponent(n)),
                                      }),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: d.qrcodeText,
                                      children: [
                                          (0, a.jsx)(o.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.qrcodeTextHeading,
                                              children: l.intl.string(l.t.llDCid),
                                          }),
                                          (0, a.jsx)(o.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: l.intl.string(l.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: d.dividerContent,
                              children: [
                                  (0, a.jsx)("div", { className: d.divider }),
                                  (0, a.jsx)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: d.dividerText,
                                      children: l.intl.string(l.t.arEHn4),
                                  }),
                                  (0, a.jsx)("div", { className: d.divider }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: d.fallbackContent,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: d.fallbackContentTextGroup,
                                      children: [
                                          (0, a.jsx)(o.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.fallbackContentHeading,
                                              children: l.intl.string(l.t["Eu8rJ/"]),
                                          }),
                                          (0, a.jsx)(o.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: l.intl.string(l.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: d.fallbackContentAction,
                                      children: [
                                          (0, a.jsx)(o.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.fallbackContentHeading,
                                              children: p,
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: d.fallbackContentTextGroup,
                                              children: [
                                                  (0, a.jsx)(o.Heading, {
                                                      variant: "heading-xxl/normal",
                                                      color: "text-default",
                                                      children: l.intl.string(l.t.RyDxBX),
                                                  }),
                                                  (0, a.jsx)(o.Heading, {
                                                      variant: "heading-xxl/bold",
                                                      color: "text-strong",
                                                      className: d.fallbackContentCode,
                                                      children: null == (t = n.match(/.{1,4}/g)) ? void 0 : t.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, a.jsx)("img", {
                              className: d.wumpus,
                              src: u,
                              alt: "",
                          }),
                      ],
                  }),
              ],
          });
};
