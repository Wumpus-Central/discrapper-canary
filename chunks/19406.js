var o = e(877020);
self.addEventListener("message", (r) => {
    let {
            data: { id: t, placeholderData: e },
        } = r,
        n = (0, o.H)(e);
    self.postMessage({ png: n, id: t });
});
