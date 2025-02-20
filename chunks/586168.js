function r(e, t) {
    return e.classList ? !!t && e.classList.contains(t) : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ');
}
n.d(t, { Z: () => r });
