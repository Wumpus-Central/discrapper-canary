function r(e) {
    if (!e) return;
    let t = !0;
    return (n) => {
        e({
            ...n,
            preventDefault() {
                n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
                t
                    ? console.error(
                          "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.",
                      )
                    : (t = !0);
            },
            continuePropagation() {
                t = !1;
            },
            isPropagationStopped: () => t,
        }),
            t && n.stopPropagation();
    };
}
n.d(t, { x: () => r });
