a.d(t, { A: () => c });
var n = a(627968),
    i = a(64700),
    s = a(397927),
    l = a(168186);
a(827669);
var r = a(985018),
    o = a(380964);
function c(e) {
    let { application: t } = e,
        a = i.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, l.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === a.length
        ? null
        : (0, n.jsxs)("div", {
              className: o.hd,
              children: [
                  (0, n.jsx)(s.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: r.intl.string(r.t.swIgTL),
                  }),
                  (0, n.jsx)("div", {
                      className: o.hQ,
                      children: a.map((e) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: o.dO,
                                  children: [
                                      (0, n.jsxs)(s.Text, {
                                          className: o.p6,
                                          variant: "code",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, n.jsx)(s.Text, {
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
