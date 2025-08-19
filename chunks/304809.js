n.d(t, { N: () => a });
let l = null;
function a() {
    if (null == l)
        try {
            l = new AudioContext();
        } catch (e) {}
    return l;
}
