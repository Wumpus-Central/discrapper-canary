var o = t(877020);
self.addEventListener("message", (e) => {
    let {
            data: { id: r, placeholderData: t },
        } = e,
        a = (0, o.H)(t);
    self.postMessage({
        png: a,
        id: r,
    });
});
