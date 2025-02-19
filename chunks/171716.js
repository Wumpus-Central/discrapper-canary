var n = e(504053);
self.addEventListener('message', (r) => {
    let {
            data: { id: t, placeholderData: e }
        } = r,
        o = (0, n.F)(e);
    self.postMessage({
        png: o,
        id: t
    });
});
