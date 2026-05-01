E.d(t, { c: () => r });
function r() {
    return (
        ((Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
            navigator.language ||
            navigator.browserLanguage ||
            navigator.userLanguage) ??
        ""
    );
}
