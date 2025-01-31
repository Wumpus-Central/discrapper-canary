function i() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = window.GLOBAL_ENV.INVITE_HOST;
    return (
        (e = '/'.concat(t)),
        ''
            .concat(n ? ''.concat(location.protocol, '//') : '')
            .concat(i)
            .concat(e)
    );
}
n.d(t, { Z: () => i });
