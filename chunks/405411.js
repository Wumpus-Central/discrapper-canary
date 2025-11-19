n.d(t, { Z: () => d });
var r = n(54381),
    a = n(473749),
    i = n(481060),
    l = n(581364),
    s = n(761652),
    o = n(388032),
    c = n(524741);
function d(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e;
            let n = null == (e = t.directory_entry) ? void 0 : e.popular_application_commands;
            return null != n
                ? n.map((e) =>
                      (0, l.Z8)({
                          rootCommand: e,
                          command: e,
                          applicationId: e.application_id,
                      }),
                  )
                : [];
        }, [t]);
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: c.sectionContainer,
              children: [
                  (0, r.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: o.intl.string(o.t.swIgTL),
                  }),
                  (0, r.jsx)("div", {
                      className: c.contentContainer,
                      children: n.map((e) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: c.commandContainer,
                                  children: [
                                      (0, r.jsxs)(i.Text, {
                                          className: c.commandName,
                                          variant: "code",
                                          color: "header-primary",
                                          children: [s.GI, e.displayName],
                                      }),
                                      (0, r.jsx)(i.Text, {
                                          variant: "text-md/normal",
                                          color: "text-default",
                                          children: e.displayDescription,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
