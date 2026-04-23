"use strict";
function r(e) {
    if (!e) return;
    let t = !0;
    return (n) => {
        e({
            ...n,
            preventDefault() {
                n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
                t = !0;
            },
            continuePropagation() {
                t = !1;
            },
            isPropagationStopped: () => t,
        }),
            t && n.stopPropagation();
    };
}
n.d(t, { T: () => r });
