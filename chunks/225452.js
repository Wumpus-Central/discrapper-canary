n.d(t, { D: () => r });
function r(e) {
    return e.map((e, t) => {
        var n, r;
        return {
            file: e.file,
            name: null != (r = e.id) ? r : "attachment_".concat(t),
            filename: null == (n = e.file) ? void 0 : n.name,
        };
    });
}
