"use strict";
function i() {
    return (
        ((Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
            navigator.language ||
            navigator.browserLanguage ||
            navigator.userLanguage) ??
        ""
    );
}
n.d(t, { c: () => i });
