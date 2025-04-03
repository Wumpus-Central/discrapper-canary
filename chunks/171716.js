var o = t(504053);
self.addEventListener('message', (e) => {
    let {
            data: { id: r, placeholderData: t }
        } = e,
        n = (0, o.F)(t);
    self.postMessage({
        png: n,
        id: r
    });
});
