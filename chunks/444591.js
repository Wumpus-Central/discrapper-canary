function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { Z: () => i });
class i {
    createDragPreview(e) {
        if (null == this.container || null == this.svg || null == this.foreignObject) return;
        let { width: t, height: n } = e.getBoundingClientRect();
        this.svg.setAttribute('viewBox', '0 0 '.concat(t, ' ').concat(n)), this.svg.setAttribute('width', ''.concat(t)), this.svg.setAttribute('height', ''.concat(n)), this.foreignObject.setAttribute('x', '0'), this.foreignObject.setAttribute('y', '0'), this.foreignObject.setAttribute('width', ''.concat(t)), this.foreignObject.setAttribute('height', ''.concat(n));
        let r = e.cloneNode(!0);
        this.foreignObject.appendChild(r);
    }
    render(e) {
        let t = this.container;
        if (null == t) return;
        let n = e.getSourceClientOffset();
        null != n && e.isDragging() && ((t.style.position = 'fixed'), (t.style.left = ''.concat(n.x + 30, 'px')), (t.style.top = ''.concat(n.y + 15, 'px')));
    }
    clear() {
        null != this.foreignObject && (this.foreignObject.innerHTML = '');
    }
    constructor(e) {
        r(this, 'container', void 0), r(this, 'svg', void 0), r(this, 'foreignObject', void 0), (this.container = null == e ? void 0 : e.createElement('div'));
        let t = (this.svg = null == e ? void 0 : e.createElement('svg'));
        null != t && (t.style.contain = 'paint'), (this.foreignObject = null == e ? void 0 : e.createElement('foreignObject')), null != this.container && null != this.svg && null != this.foreignObject && ((this.container.className = 'drag-previewer'), (this.container.style.cssText = 'z-index: 1000; filter: drop-shadow(0 0 0 var(--background-floating)) drop-shadow(var(--elevation-high))'), this.svg.appendChild(this.foreignObject), this.container.appendChild(this.svg), null == e || e.body.appendChild(this.container));
    }
}
