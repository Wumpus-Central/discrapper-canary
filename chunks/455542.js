n.d(t, {
    A: () => o,
});
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(168186);
n(827669);
var s = n(985018),
    c = n(380964);

function o(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e;
            let n = null == (e = t.directory_entry) ? void 0 : e.popular_application_commands;
            return null != n
                ? n.map((e) =>
                      (0, i.Oe)({
                          rootCommand: e,
                          command: e,
                          applicationId: e.application_id,
                      }),
                  )
                : [];
        }, [t]);
    return 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: c.hd,
              children: [
                  (0, l.jsx)(r.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: s.intl.string(s.t.swIgTL),
                  }),
                  (0, l.jsx)("div", {
                      className: c.hQ,
                      children: n.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: c.dO,
                                  children: [
                                      (0, l.jsxs)(r.Text, {
                                          className: c.p6,
                                          variant: "code",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, l.jsx)(r.Text, {
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
