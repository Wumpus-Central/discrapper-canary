n.d(t, {
    b: () => i,
});
var r = n(360469);

function i(e) {
    var t, n;
    return (
        null != e &&
        (!!r._J.has(e.id) ||
            ("embeddedActivityConfig" in e
                ? (null == (t = e.embeddedActivityConfig) ? void 0 : t.displays_advertisements) === !0
                : "embedded_activity_config" in e &&
                  (null == (n = e.embedded_activity_config) ? void 0 : n.displays_advertisements) === !0))
    );
}
