r.d(t, { Z: () => a });
var n = r(192379),
    o = r(723184);
let a = function () {
    var e = (0, o.default)({
        default: {
            triangle: {
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '4px 0 4px 6px',
                borderColor: 'transparent transparent transparent #fff',
                position: 'absolute',
                top: '1px',
                left: '1px'
            },
            triangleBorder: {
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '5px 0 5px 8px',
                borderColor: 'transparent transparent transparent #555'
            },
            left: {
                Extend: 'triangleBorder',
                transform: 'translate(-13px, -4px)'
            },
            leftInside: {
                Extend: 'triangle',
                transform: 'translate(-8px, -5px)'
            },
            right: {
                Extend: 'triangleBorder',
                transform: 'translate(20px, -14px) rotate(180deg)'
            },
            rightInside: {
                Extend: 'triangle',
                transform: 'translate(-8px, -5px)'
            }
        }
    });
    return n.createElement('div', { style: e.pointer }, n.createElement('div', { style: e.left }, n.createElement('div', { style: e.leftInside })), n.createElement('div', { style: e.right }, n.createElement('div', { style: e.rightInside })));
};
