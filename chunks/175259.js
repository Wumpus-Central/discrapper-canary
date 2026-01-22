function r() {
    let e;
    return null !=
        (e =
            (Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
            navigator.language ||
            navigator.browserLanguage ||
            navigator.userLanguage)
        ? e
        : "";
}
n.d(t, {
    c: () => r,
});
