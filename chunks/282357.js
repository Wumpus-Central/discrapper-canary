"use strict";
n.d(t, { o: () => a });
var r = n(158954),
    i = n(775602);
let a = {
    init() {
        i.A.addChangeListener(() => {
            i.A.keyboardModeEnabled
                ? (r.oPN.setRingsEnabled(!0), r.oPN.enableAnimationTracking())
                : (r.oPN.setRingsEnabled(!1), r.oPN.disableAnimationTracking());
        });
    },
};
