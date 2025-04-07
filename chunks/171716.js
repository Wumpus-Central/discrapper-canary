var o = t(504053);
self.addEventListener('message', (r) => {
    let {
            data: { id: e, placeholderData: t }
        } = r,
        n = (0, o.F)(t);
    self.postMessage({
        png: n,
        id: e
    });
});
