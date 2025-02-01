n.d(t, { Z: () => a });
var i = n(192379),
    r = n(723184);
let a = function () {
    var e = (0, r.default)({
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
    return i.createElement('div', { style: e.pointer }, i.createElement('div', { style: e.left }, i.createElement('div', { style: e.leftInside })), i.createElement('div', { style: e.right }, i.createElement('div', { style: e.rightInside })));
};
