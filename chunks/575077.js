t.d(e, { p: () => i });
var a = t(627968);
t(64700);
var n = t(834730),
    r = t(426043),
    l = t(985018);
function i(A, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, r.A)({
        title: A,
        body:
            "string" == typeof e
                ? e
                : l.intl.format(e, {
                      highlightHook: (A) =>
                          (0, a.jsx)(n.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              style: { display: "inline" },
                              children: A,
                          }),
                      ...t,
                  }),
        cta: l.intl.string(l.t["NX+WJN"]),
        onConfirm: () => {},
    });
}
