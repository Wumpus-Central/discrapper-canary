"use strict";
function r() {
    return "u" < typeof platform ? 0 : parseInt(platform?.version ?? "0", 10);
}
n.d(t, { U: () => r });
