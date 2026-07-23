u.d(n, { v: () => i });
let c = null;
function i() {
    if (null == c)
        try {
            c = new AudioContext();
        } catch (t) {}
    return c;
}
