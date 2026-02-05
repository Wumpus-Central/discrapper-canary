"use strict";
n.d(t, { b: () => i });
var r = n(360469);
function i(e) {
    return (
        null != e &&
        (!!r._J.has(e.id) ||
            ("embeddedActivityConfig" in e
                ? e.embeddedActivityConfig?.displays_advertisements === !0
                : "embedded_activity_config" in e && e.embedded_activity_config?.displays_advertisements === !0))
    );
}
