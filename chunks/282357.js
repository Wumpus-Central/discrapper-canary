"use strict";
n.d(t, { o: () => s });
var r = n(187322),
    i = n(775602);
let s = {
    init() {
        i.A.addChangeListener(() => {
            i.A.keyboardModeEnabled
                ? (r.oP.setRingsEnabled(!0), r.oP.enableAnimationTracking())
                : (r.oP.setRingsEnabled(!1), r.oP.disableAnimationTracking());
        });
    },
};
