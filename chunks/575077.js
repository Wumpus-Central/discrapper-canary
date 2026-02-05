t.d(e, { p: () => l });
var n = t(627968);
t(64700);
var a = t(397927),
    r = t(426043),
    i = t(985018);
function l(A, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, r.A)({
        title: A,
        body:
            "string" == typeof e
                ? e
                : i.intl.format(e, {
                      highlightHook: (A) =>
                          (0, n.jsx)(a.Text, {
                              variant: "text-md/normal",
                              color: "text-default",
                              style: { display: "inline" },
                              children: A,
                          }),
                      ...t,
                  }),
        cta: i.intl.string(i.t["NX+WJN"]),
        onConfirm: () => {},
    });
}
