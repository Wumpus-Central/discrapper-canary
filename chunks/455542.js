a.d(t, { A: () => d });
var n = a(627968),
    l = a(64700),
    i = a(534514),
    s = a(834730),
    r = a(168186);
a(827669);
var o = a(985018),
    c = a(733975);
function d(e) {
    let { application: t } = e,
        a = l.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, r.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === a.length
        ? null
        : (0, n.jsxs)("div", {
              className: c.hd,
              children: [
                  (0, n.jsx)(i.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: o.intl.string(o.t.swIgTL),
                  }),
                  (0, n.jsx)("div", {
                      className: c.hQ,
                      children: a.map((e) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: c.dO,
                                  children: [
                                      (0, n.jsxs)(s.E, {
                                          className: c.p6,
                                          variant: "code",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, n.jsx)(s.E, {
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
