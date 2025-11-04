n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    o = n(881998),
    s = n(553795),
    a = n(45966),
    c = n(657021),
    d = n(290511),
    u = n(388032),
    m = n(362791);
function p(e) {
    let { guildId: t, onComplete: n, isLastStep: p } = e,
        { onboardingConnections: f, isLoading: g } = (0, i.cj)([a.Z], () => ({
            onboardingConnections: a.Z.getConnections(t),
            isLoading: a.Z.isLoading(),
        })),
        h = (0, i.e7)(
            [o.Z, s.Z],
            () =>
                f.some((e) => {
                    if (e.connection_type === d.zz.APPLICATION && null != e.application_id) {
                        let t = o.Z.getNewestTokenForApplication(e.application_id);
                        return o.Z.getFetchStateForApplication(e.application_id) === o.M.FETCHED && null != t;
                    }
                    if (e.connection_type === d.zz.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = s.Z.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [f],
        );
    return g
        ? (0, r.jsxs)("div", {
              className: m.loadingContainer,
              children: [
                  (0, r.jsx)(l.$jN, {}),
                  (0, r.jsx)(l.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: u.intl.string(u.t.ZTNur7),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: m.container,
              children: (0, r.jsxs)("div", {
                  className: m.content,
                  children: [
                      (0, r.jsxs)("div", {
                          className: m.scrollerContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: m.header,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: m.headerTitle,
                                          children: (0, r.jsx)(l.Heading, {
                                              variant: "heading-xl/semibold",
                                              children: u.intl.string(u.t.eDVMrA),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: m.headerDescription,
                                          children: (0, r.jsx)(l.Text, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: u.intl.string(u.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: m.connectionsListScroller,
                                  children: (0, r.jsx)("div", {
                                      className: m.connectionsList,
                                      children: f.map((e, t) => (0, r.jsx)(c.Z, { connection: e }, t)),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: m.footer,
                          children: (0, r.jsxs)("div", {
                              className: m.actions,
                              children: [
                                  (0, r.jsx)("div", {}),
                                  (0, r.jsx)("div", {
                                      className: m.primaryActions,
                                      children: (0, r.jsx)(l.Button, {
                                          variant: h ? "primary" : "secondary",
                                          onClick: n,
                                          text: h
                                              ? p
                                                  ? "".concat(u.intl.string(u.t["8SuVoE"]), " \uD83C\uDF89")
                                                  : u.intl.string(u.t.PDTjLN)
                                              : u.intl.string(u.t["5Wxrcd"]),
                                          icon: p ? void 0 : l.d4D,
                                          iconPosition: "end",
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
}
