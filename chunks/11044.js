function i(e, t) {
    let n = new Image();
    ((n.src = e), (n.onload = () => t?.(e)));
}
n.d(t, { N: () => i });
