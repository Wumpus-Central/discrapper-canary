n.d(t, { Z: () => d });
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(581364),
    s = n(761652),
    o = n(388032),
    c = n(200962);
function d(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
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
        : (0, a.jsxs)("div", {
              className: c.sectionContainer,
              children: [
                  (0, a.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: o.intl.string(o.t.swIgTL),
                  }),
                  (0, a.jsx)("div", {
                      className: c.contentContainer,
                      children: n.map((e) =>
                          (0, a.jsxs)(
                              "div",
                              {
                                  className: c.commandContainer,
                                  children: [
                                      (0, a.jsxs)(i.Text, {
                                          className: c.commandName,
                                          variant: "code",
                                          color: "text-strong",
                                          children: [s.GI, e.displayName],
                                      }),
                                      (0, a.jsx)(i.Text, {
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
