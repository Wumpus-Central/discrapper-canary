"use strict";
n.d(t, { d: () => i });
var r = n(339975);
function i(e) {
    return { keyboardProps: e.isDisabled ? {} : { onKeyDown: (0, r.T)(e.onKeyDown), onKeyUp: (0, r.T)(e.onKeyUp) } };
}
